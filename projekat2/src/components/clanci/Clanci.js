import Clanak from "./Clanak";

const Clanci = ({clanci, onDelete}) => {

  return (
    <div>
      {clanci.map((clanak) => (
        <Clanak key={clanak.id} clanak={clanak} onDelete={onDelete}/>
      ))}
    </div>
  );
}; 

export default Clanci;
