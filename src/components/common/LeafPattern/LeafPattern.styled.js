import styled from 'styled-components';
import bgLeaf from '../../../assets/shared/desktop/bg-pattern-leaf.svg';

export const LeafContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60rem;
  left: ${({ left }) => left ? `${left}px` : null};
  position: absolute;
  right: ${({ right }) => right ? `${right}px` : null};
  top: ${({ top }) => top ? `${top}px` : null};
  width: 100%;
  z-index: -10000;
`

export const Leaf = styled.div`
  background-image: url(${bgLeaf});
  background-repeat: no-repeat;
  height: 100%;
  max-width: 144rem;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  transform: ${({ rotation }) => rotation ? `rotate(${rotation}deg)` : null};
`