 import List from './List'

function Seasons({seasonCount}){

const row=[];

// for(let i=0 ; i< seasonCount; i++){
//     row.push(<List key={i+1}/>);
// }

    return(
        <div>
        {
            Array.from({length: seasonCount > 0 ? seasonCount: 1 } , (_,i) => <List key={i+1}/>)
        }
        </div>
    );

}




export default Seasons;