 import List from './List'
 import '../styles/List.css'

function Seasons({seasonCount}){

    return(
        <div className='seasonFlex'>
        {
            Array.from({length: seasonCount} , (_,i) => <List key={i+1} index={i+1}/>)
        }
        </div>
    );

}




export default Seasons;