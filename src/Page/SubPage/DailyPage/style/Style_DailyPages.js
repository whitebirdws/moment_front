import styled from "styled-components";

export const LAYOUT_BOX02_2_DAILY_PAGE = styled.div`
  height: 170px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #fefefe;
  transition: all 0.3s ease-in-out;
`;

export const LAYOUT_BOX03_DAILY_PAGE = styled.div`
  color: #ffffff;
  width: 1200px;
  height: 660px;
  border-radius: 10px;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;
export const LAYOUT_BOX04_DAILY_PAGE = styled.div``;

export const MenuUl = styled.ul`
  padding-top: 10px;
`;
export const MenuLi = styled.li`
  margin-left: 10px;
  &:nth-child(1) {
    display: flex;
    justify-content: center;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:nth-child(3) {
    margin-top: 3px;
    gap: 10px;
    display: flex;
    justify-content: center;
  }
`;
export const SubMenuUl = styled.ul``;
export const SubMenuLi = styled.li``;

export const MenuTitle = styled.div`
  width: 220px;
  height: 50px;
  margin-bottom: 10px;
  background-color: #b1c6fe;
  border-radius: 10px;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
`;

export const TextArea = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  color: #222;
  font-size: 1em;
  overflow: hidden;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;
export const EditSubGroupSection = styled.div`
  display: flex;
`;

export const EditTitleSubLayout = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #222;
  background-color: #e3e3e3;
  border-radius: 15px 0 0 15px;
  box-sizing: border-box;
  opacity: 0.8;
`;
export const EditTitle = styled.input`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;

  color: #222;
  font-size: 1.2em;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 0 15px 15px 0px;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  height: 30px;
  color: #ccc;
  background-color: #222;
`;

export const SaveButton = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #efefef;
  padding: 15px;
  font-family: "Roboto-Regular";
  font-weight: 600;
  font-size: 0.8em;
  cursor: pointer;
  color: #222;
  background-color: #fff;
  &:hover {
    color: #ffe558;
    transition: all 0.3s ease-in-out;
  }
`;
