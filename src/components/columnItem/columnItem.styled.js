import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 20px;
  border: 0;
  border-radius: 8px;
  background: #121212;

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconEdit = styled.svg`
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: blue;
  }
`;

export const IconDelete = styled.svg`
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: tomato;
  }
`;
