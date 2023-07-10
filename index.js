const Box = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
};

const element = (
  <div className="main-page">
    <h1>Boxes</h1>
    <div className="boxContainer">
      <Box className="box-1" children="Small"></Box>
      <Box className="box-2" children="Medium"></Box>
      <Box className="box-3" children="Large"></Box>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
