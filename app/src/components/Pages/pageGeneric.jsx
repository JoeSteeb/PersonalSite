import "./page.css"
export const PageGeneric = ({title, content}) => {
    return <div className="page-wrapper">
        <div className="page-title">{title}</div>
        <div className="page-content">{content}</div>
    </div>
}