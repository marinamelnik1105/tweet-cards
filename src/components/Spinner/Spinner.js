import styled from 'styled-components';
import { Puff } from 'react-loader-spinner';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const Spinner = () => {
  return (
    <LoaderContainer>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#52319f"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};
