

import { useNavigate } from 'react-router-dom';
import { Button, Card, List } from 'antd';
const data = [
  {
    title: 'react-motion',
    content: <ul>
      <li>React-Motion 是一个动画库</li>
      <li>利用物理学来为React元素创建几乎自然的动画。</li>
    </ul>,
    link: '/motion'
  }
];
function App(props) {
  const navigate = useNavigate();

  return (
    <div className="App" style={{padding: 10}}>
      {
        data.map(item=> (
          <Card 
            title={item.title} 
            style={{ marginBottom: 16 }}
            extra={item.link ? <a href="#" onClick={()=> {navigate(item.link)}}>查看</a> : null}>
            {item.content}
          </Card>
        ))
      }
      <Button type="primary">button demo</Button>
    </div>
  );
}

export default App;
