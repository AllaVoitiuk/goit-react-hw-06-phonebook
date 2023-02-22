import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fb6fa5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  min-height: 100px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  font-size: 16px;
  padding: 5px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;