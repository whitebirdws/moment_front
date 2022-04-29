import styled from "styled-components";

export const SchedulePageContainer = styled.div``;
export const SchedulePageTitle = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  width: 150px;
  height: 100px;
  background: none;
  border-radius: 30px;
  border: 2px solid #fff;
  line-height: 100px;
  font-size: 1.3em;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #908fe6;
  }

  @media (max-width: 1600px) {
    margin: 50px auto;
    width: 150px;
    height: 50px;
    line-height: 50px;
  }
`;

export const SchedulePageSubContainer = styled.div`
  width: 1400px;
  margin: 20px 20px 0;
  color: #222;

  @media (max-width: 1870px) {
    width: 1200px;
  }
  @media (max-width: 1600px) {
    width: 700px;
    margin: 20px auto;
  }
  @media (max-width: 768px) {
    width: 480px;
    height: 800px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const Input = styled.input`
  width: 50px;
  height: 50px;
  border: none;

  background-color: rgba(255, 254, 254, 0.3);
  text-align: center;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;
export const Select = styled.select`
  width: 50px;
  height: 50px;
  border: none;
  width: 60px;
  font-size: 1em;

  background-color: rgba(255, 254, 254, 0.3);
  &:focus {
    outline: none;
  }
`;
export const Span = styled.div`
  font-size: 1em;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(255, 254, 254, 0.3);
`;

export const MenuSection = styled.div`
  font-family: "Roboto-Regular";
  background-color: rgba(255, 254, 254, 1);
  border: 1px solid #fff;
  border-bottom: none;
  display: flex;
`;

export const Thead = styled.div`
  width: 1400px;
  @media (max-width: 1870px) {
    width: 1200px;
  }
  @media (max-width: 1600px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;
export const TheadUl = styled.ul`
  display: flex;
`;
export const TheadList = styled.li`
  width: 200px;
  height: 50px;
  background-color: rgba(255, 254, 254, 0.7);
  border: 1px solid #fff;
  color: #222;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
`;
export const Tbody = styled.div`
  width: 1400px;
  @media (max-width: 1870px) {
    width: 1200px;
  }
  @media (max-width: 1600px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;
export const TbodyUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const TbodyList = styled.li`
  text-align: center;
  color: #222;
  width: 200px;
  height: 100px;
  padding-top: 5px;
  box-sizing: border-box;
  vertical-align: text-top;
  border: 1px solid #fff;
  background-color: rgba(255, 254, 254, 0.7);
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 1870px) {
    width: 171.4px;
  }
  @media (max-width: 1600px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 68.5px;
  }
  @media (max-width: 480px) {
    width: 35.7px;
    height: 50px;
  }
`;
