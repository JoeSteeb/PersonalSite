export const pageGeneric = (title, content) => {
    <div className="pageWrapper">
        <h1 className="pageTitle">{title}</h1>
        <div className="pageContent">{content}</div>
    </div>
    return
}