import styled from 'styled-components';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import { useState } from 'react';
import Footer from './component/Footer/Footer';

const AppWrapper = styled.div`
`

function App() {
  const arr=[]

const [list,setList]=useState(localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):arr)

localStorage.setItem('data',JSON.stringify(list))


function checkked(index){
setList(list.map((e,i)=>i===index?{...e,check:!e.check}:{...e}))
}

function deleted(index){
  setList(list.filter((e,i)=>i!==index))
}

function addTask(text){
  setList([...list,{check:false,name:text}])
}

  return (
    <AppWrapper >
      <Header list={list}/>
      <Body list={list} checkked={checkked} deleted={deleted}/>
      <Footer addTask={addTask}/>
    </AppWrapper>
  );
}

export default App;
