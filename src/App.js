

const App=()=> {
  return (
<div>
  <ul class="tree">
    {/* <!-- Root node (Category) --> */}
    <li><div class="sticky">Animals</div>
      <ul>

        {/* <!-- Sub category --> */}
        <li><div class="sticky">Birds</div></li> 
        {/* <!-- Second level node --> */}
        <li><div class="sticky">Mammals</div>
        
        </li>
      </ul>
    </li>

    <li><div class="sticky">Plants</div>
      <ul>
        <li><div class="sticky">Flowers</div></li>
        <li><div class="sticky">Trees</div></li>
        <li><div class="sticky">Trees</div></li>
      </ul>
    </li>
  </ul>
</div>

  );
}

export default App;
