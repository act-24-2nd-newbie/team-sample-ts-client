type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>

export default function TextField(props: TextFieldProps) {
  return <input {...props} />
}