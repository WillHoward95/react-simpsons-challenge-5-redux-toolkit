const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="characterQuote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
