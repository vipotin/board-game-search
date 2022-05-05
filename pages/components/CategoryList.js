function CategoryList ({ categoryList, setCategory }) {
  return (
    <div className="gameCategory">
      <label>Category</label><br></br>
      <select id="category" defaultValue={"default"} onChange={(e) => { setCategory(e.target.value) }}>
        <option value="default" disabled>Select category</option>
        {categoryList.map(function(type, id){
          return <option value={type.id} key={id}>{type.name}</option>
        })}
      </select>
    </div>
  )
}

export default CategoryList