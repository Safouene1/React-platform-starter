import React, { FunctionComponent } from 'react';
import { Button, Result } from 'antd';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';
interface OwnProps {}

type Props = OwnProps;

const NotFound: FunctionComponent<Props> = (props) => {

  const navigate = useNavigate();
  return (
    <Result
      title="Oops !"
      status={404}
      subTitle="Looks like you're lost ! , the page you visited does not exist."
      extra={[
        <Button  onClick={()=>navigate("/")}>Go to Home</Button>,
        <Button type="primary" onClick={()=> navigate(-1)}>Go Back</Button>,
      ]}
    />
  );
};

export default NotFound;
