
import Tutorial from "../Tutorial/Tutorial";



const Tutorials = ({ selectTutorialEvent, tutorials}) => {
  

    return(
        <div className="grid grid-cols-3 w-9/12 bottom-2 box-border gap-4  justify-between">
            <Tutorial tutorials = {tutorials} selectTutorialEvent = {selectTutorialEvent}></Tutorial>
        </div>
    )
}

export default Tutorials;
