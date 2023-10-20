
const CheckBox = ({showLayer, setShowLayer}) => {
  
    return (
      <label className="flex text-base gap-1 items-baseline ms-1">
        Vector Layer
        <input
          type="checkbox"
          checked={showLayer}
          onChange={(event) => setShowLayer(event.target.checked)}
        />
      </label>
    );
}

export default CheckBox