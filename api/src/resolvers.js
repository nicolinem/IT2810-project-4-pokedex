import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";

const cypher = async (driver, query, params) => {
  const session = driver.session();
  const q = await session.run(query, params);
  session.close();
  return q.records;
};

const getJWT = (userId) => sign({ userId }, process.env.JWT_SECRET || "secret");

export async function Login(obj, { email, password }, { driver }) {
  const [user] = await cypher(
    driver,
    "MATCH (u:User { email: $email }) RETURN id(u) AS id, u.password AS password",
    { email }
  );
  if (!user) throw new Error("user with this email doesn't exist");
  const userId = user.get("id").low;
  const encryptedPassword = user.get("password");
  const isPasswordsMatch = compareSync(password, encryptedPassword);
  if (!isPasswordsMatch) throw new Error("wrong password");
  const token = getJWT(userId);
  return token;
}
export async function Signup(obj, { email, password, name }, { driver }) {
  console.log("LOGIN");
  const [user] = await cypher(
    driver,
    "MATCH (u:User { email: $email }) RETURN id(u) AS id",
    { email }
  );
  if (user) throw new Error("user with this email already exists");

  const salt = genSaltSync(10);
  const encryptedPassword = hashSync(password, salt);

  const [newUser] = await cypher(
    driver,
    "CREATE (u:User { email: $email, password: $password, name: $name}) RETURN id(u) AS id",
    { email, password: encryptedPassword, name }
  );
  const userId = newUser.get("id").low;
  const token = getJWT(userId);
  return token;
}
