import React, { FunctionComponent } from 'react';
import { Button, Result } from 'antd';
import './NotFound.css';
interface OwnProps {}

type Props = OwnProps;

const NotFound: FunctionComponent<Props> = (props) => {

  return (
    <Result
      title="Oops !"
      subTitle="Looks like you're lost ! , the page you visited does not exist."
      extra={<Button type="primary">Go Back</Button>}
    />
  );
};

export default NotFound;
