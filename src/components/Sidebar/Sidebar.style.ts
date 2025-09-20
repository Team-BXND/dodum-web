import styled from 'styled-components';
import DodumLogo from '@/assets/dodum-logo.svg';
import { Link } from 'react-router';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid gray;
  padding: 1rem 1.25rem;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 16rem;
`;

export const Tab = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.875rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${({ $active }) => ($active ? 'white' : 'black')};
  background-color: ${({ $active }) => ($active ? '#26874e' : 'transparent')};
  &:hover {
    background-color: ${({ $active }) => ($active ? '#26874e' : '#34a061')};
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
`;

export const Logo = styled(DodumLogo)`
  margin: 0.25rem 0.875rem;
  width: 8rem;
  cursor: pointer;
`;
