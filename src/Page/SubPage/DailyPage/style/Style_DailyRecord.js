import styled from "styled-components";

export const DailyRecordContainer = styled.div`
  width: 73vw;
  margin-top: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1600px) {
    width: 60vw;
  }
  @media (max-width: 1300px) {
    width: 1180px;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const DailyRecordLinkbox = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;

  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: #b2baf1;
`;
export const DailyRecordRemoveBox = styled.button`
  margin-bottom: 10px;
  width: 60px;
  height: 30px;

  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #b2baf1;
`;
export const DailyRecordModifyBox = styled.button`
  margin-bottom: 10px;
  margin-left: 10px;
  width: 60px;
  height: 30px;

  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #b2baf1;
`;
export const DailyRecordSaveBox = styled.button`
  margin-bottom: 10px;

  width: 60px;
  height: 30px;

  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #b2baf1;
`;
export const DailyRecordCancelBox = styled.button`
  margin-bottom: 10px;
  margin-left: 10px;
  width: 60px;
  height: 30px;

  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #b2baf1;
`;

export const ViewDescArea = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 1000px;
  height: 500px;
  font-size: 1em;
  color: #222;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #fff;
  overflow-y: scroll;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 1600px) {
    width: 980px;
    margin: 0 auto;
  }

  @media (max-width: 980px) {
    width: 100vw;
    margin: 0 auto;
  }
`;
export const ViewDescText = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ViewTitleSection = styled.div`
  clear: both;

  font-size: 1.5em;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`;
export const ViewTextLi = styled.li`
  padding-top: 10px;
`;
