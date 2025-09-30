type Props = {
    title?: string;
    content: string;
    type?: "success" | "danger" | "info" | "warning" | "link";
};

export default function Toast({title, content, type = "info"}: Props) {
  return (
    <div className={`notification is-${type}`}>
        {title && (
            <p>
                <strong>{title}</strong>
            </p>
        )}
        <p>{content}</p>
    </div>
  )
}
