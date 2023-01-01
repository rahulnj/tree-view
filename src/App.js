const App = () => {
  const handleOnClick = () => {
    const para = document.createElement('p')
    const node = document.createTextNode('This is new.')
    para.appendChild(node)
    console.log(para);
    const main = document.getElementsByClassName('app')[0];
    // main.setAttribute('id','para-1');
    
    console.log(main);
    const clone = para.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
  }
  return (
    <div className='app'>
      <ul className='tree'>
        {/* <!-- Root node (Category) --> */}
        <li>
          <div className='sticky'>Animals</div>
          <ul>
            {/* <!-- Sub category --> */}
            <li>
              <div className='sticky'>Birds</div>
            </li>
            {/* <!-- Second level node --> */}
            <li>
              <div className='sticky'>Mammals</div>
            </li>
          </ul>
        </li>

        <li>
          <div className='sticky'>Plants</div>
          <ul>
            <li>
              <div className='sticky'>Flowers</div>
            </li>
            <li>
              <div className='sticky'>Trees</div>
            </li>
            <li>
              <div className='sticky'>Trees</div>
            </li>
          </ul>
        </li>

        <li>
          <div className='sticky'>Plants</div>
          <ul>
            <li>
              <div className='sticky'>Flowers</div>
            </li>
            <li>
              <div className='sticky'>Trees</div>
            </li>
            <li>
              <div className='sticky'>Trees</div>
            </li>
          </ul>
        </li>
      </ul>
      <button onClick={handleOnClick}>click me</button>
    </div>
  )
}

export default App
