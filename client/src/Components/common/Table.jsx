export function Table(props) {
    return (
    <div className="overflow-x-auto flex justify-center">
    <table className="table max-w-lg">
      <thead>
            {props.headers}
      </thead> 
      <tbody>
            {props.children}
      </tbody>
    </table>
  </div>)
}