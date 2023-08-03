const MyComponent = (props) => {
  return (
    <div>
      hi, my name is {props.name}. <br />
      children value is {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'default name',
};

export default MyComponent;
