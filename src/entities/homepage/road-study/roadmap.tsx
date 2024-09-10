import styled from 'styled-components';
import { useState } from 'react';
const roadMapData = [
  {
    title: 'Chặng 1',
    level: 'Beginner',
  },
  {
    title: 'Chặng 2',
    level: 'Intermediate',
  },
  {
    title: 'Chặng 3',
    level: 'Advanced',
  },
  {
    title: 'Chặng 4',
    level: 'Expert',
  },
  {
    title: 'Chặng 5',
    level: 'Master',
  },
];

const RoadMap = () => {
  const [active, setActive] = useState(0);
  return (
    <RoadMapWrapper className="space-x-3">
      {roadMapData.map((item, index) => (
        <RoadMapContent
          key={index}
          onClick={() => {
            setActive(index);
          }}
          isActive={active === index}
        >
          <RoadContent className="road-content">
            <p>{item.title}</p>
            <p className="font-bold">{item.level}</p>
          </RoadContent>
          <div className="dot_check"></div>
        </RoadMapContent>
      ))}
    </RoadMapWrapper>
  );
};
export default RoadMap;

const RoadMapWrapper = styled.div`
  position: relative;
  height: 130px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  border-bottom: 2px solid #dfe1e6;
`;

const RoadMapContent = styled.div<{ isActive: boolean }>`
  --background-color: ${(props) => (props.isActive ? 'var(--blue-dark)' : 'transparent')};
  --text-color: ${(props) => (props.isActive ? 'white' : 'black')};
  --dot-background-color: ${(props) => (props.isActive ? 'var(--blue-dark)' : '#dfe1e6')};

  position: relative;
  width: 20%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  .dot_check {
    position: absolute;
    bottom: -42.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--dot-background-color);
    display: inline-block;
    z-index: 1;
  }
  .road-content {
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border-radius: 10px;
    background-color: var(--background-color);
    color: var(--text-color);
    p {
      font-size: 18px;
      margin: 0;
    }
  }
  &:hover {
    .road-content {
      background-color: var(--blue-dark);
      color: white;
    }
    .dot_check {
      background-color: var(--blue-dark);
    }
  }
`;

const RoadContent = styled.div``;
