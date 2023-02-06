export default function Checkbox() {
  return (
    <>
      <label>Check Box</label>
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            name="item 1"
            checked
            className="checked:bg-slate-50"
          />
           Item 1
        </label>
        <label>
          <input type="checkbox" name="item 2" />
           Item 2
        </label>
        <label>
          <input type="checkbox" name="item 3" />
           Item 3
        </label>
      </div>
    </>
  );
}
