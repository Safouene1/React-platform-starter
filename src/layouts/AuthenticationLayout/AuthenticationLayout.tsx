import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import './AuthenticationLayout.css';
export const AuthenticationLayout: React.FC<{}> = (props) => {
  return (
    <div className={'authLayout '}>
      <Row>
        <Col
          xs={0}
          sm={0}
          md={6}
          lg={12}
          xl={16}
          className={'authLayout__left'}
        >
          <div className={'authLayout__left__content'}></div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={12}
          xl={6}
          className={'authLayout__left'}
        >
          <div className={'authLayout__right__content center'}>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};
