import {useLocation} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state;
  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {/* TODO: add all media file details and video/image player here */}
      {/* TODO: add go back button here*/}
    </>
  );
};

export default Single;
