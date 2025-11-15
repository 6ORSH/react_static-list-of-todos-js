// Add the required props
export const TodoInfo = ({ todo: { id, userId, completed, title } }) => {
  return (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">HTML</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a>
    </article>
  );
};
