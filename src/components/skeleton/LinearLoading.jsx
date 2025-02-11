import "./LinearLoading.css";
/**
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
function LinearLoading(props) {
  return (
    <div {...props}>
      <div className="loader-line before:bg-primary-main"></div>
    </div>
  );
}
export default LinearLoading;
