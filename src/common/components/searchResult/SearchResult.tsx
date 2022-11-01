import { Pokemon } from '../../../types/pokemon.utils';
import { usePokemonQuery } from '../../../utils/queries';
import Button from '../button/Button';
import Card from "../card/Card";

interface Props {
    searchText: string;
    activeTypes: String[];
    offset: number;
}


const SearchResult = (props: Props) => {

      const { loading, error, data, fetchMore } = usePokemonQuery(props.searchText, props.activeTypes, props.offset);


  const handleLoadMore = () => {
    fetchMore({
            variables: {
                offset: data.pokemon.length
            },
      updateQuery: (prevState: any, { fetchMoreResult }: any) => {
              console.log(prevState, fetchMoreResult);
                if (!fetchMoreResult || data.pokemon.length === 0) return prevState;
                return {
                    ...prevState,
                    pokemon: [...prevState.pokemon, ...fetchMoreResult.pokemon]

                };
            }

        });
  }
     
    
    if (loading) {
        return <div className="h-[500px] "></div>
    }
    if (!data) {
        return <div >No data...</div>
    }

    
    
  return (
      <div className="flex flex-col items-center justify-center">

            
          <div className="grid grid-cols-4 gap-6 px-32 py-20 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data && data.pokemon.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
          ))}
                  
          </div>
      
            <div className="mb-10">
                < Button  buttonType="primary" onClick={handleLoadMore}>
                        Load More
                </Button>
          </div>
          
                
      </div>
  )
}

export default SearchResult