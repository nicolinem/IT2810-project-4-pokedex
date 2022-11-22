# Prosjekt 4 Nicoline

Pokedèx er en videreutvikling av prosjekt 3, og er en applikasjon for å søke og filtrere på ulike pokemons. Dersom en bruker er logget inn kan man også etterlate reviews på pokemonene.

Hovedsiden lar brukeren søke på pokemon på navn, filtrere på type og sortere etter pokemonID. Ved å søke lastes de første 25 pokemonene, og flere laster automatisk når brukeren scroller til bunnen av listen. Ved å trykke på et pokèmon-kort vil brukeren se en oversikt over statistikken til pokèmonene samt eventuelle anmeldelser. Dersom brukeren er logget inn vil den kunne etterlate en review. For å logge inn kan brukeren klikke på “Sign In” overst i høyre hjørne, og kan opprette en bruker dersom den ikke har det.

# Oppsett

For å teste prosjektet:

1. Klon repo-et
2. Kjør npm install
3. Kjør kommandoen npx expo start
4. Test appen fra emulator/enhet via expo. (Dersom du tester fra mobil sørg for å være på samme nett)

# Teknologi og tredjepartskomponenter

## Apollo

Gjenbruker samme database som i prosjekt 3, og laster inn data med graphql og apollo-server som ble brukt da også.

## Navigation

Jeg bruker React Navigation for React native for å administrere og håndtere overgang og presentasjon av de ulike sidene i applikasjonen.

## Tailwind CSS (Tailwind React Native Classnames)

Rammeverk for å legge til styling på komponentene. Tailwind ble brukt i prosjekt 3, og det var naturlig å ta det med over i Native-applikasjonen. Tailwind React Native Classnames er et API for Tailwind CSS og React Native som gjorde overgangen enkel.

## AsyncStorage

Applikasjonen lar brukere registrere seg og logge inn for å etterlate anmeldelser, for å dele statusen på et globalt nivå brukes AsyncStorage. AsyncStorage er et asynkront nøkkelverdilagringssystem som er globalt, og brukes i stedet for LocalStorage som brukes i utvikling for web.

# Gjenbruk av kode

Appen er en versjon av prosjekt 3 tilpasset mobile enheter. Mange av komponentene lot seg dermed gjenbruke ganske naturlig. Prosjektet utnytter den samme backenden og queriene. Strukturen i applikasjonen virker veldig lik, men i kodebasen er komponentene i stor grad blitt forenklet med ryddigere kode, samt tilpasset React Native. Dette gjorde det naturlig for meg å konvertere prosjektet til Native med god mulighet for gjenbruk.

# Testing

For å teste prosjektet er det gjennomført manuell e2e testing på Android og IOS. Appen laster inn, laster inn data, filtrerer og sorterer etter brukerens ønsker og manøvrerer mellom sider.
