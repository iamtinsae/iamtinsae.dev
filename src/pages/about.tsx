import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const About = () => (
  <Main meta={<Meta title={AppConfig.title} description={'About'} />}>
    <h1>About Page</h1>
  </Main>
);

export default About;
