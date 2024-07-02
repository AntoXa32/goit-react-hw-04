import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Toaster />
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          if (!values.topic.trim()) {
            toast.error("Please enter a search term!");
          } else {
            onSearch(values.topic);
            actions.resetForm();
          }
        }}
      >
        <Form>
          <Field
            type="text"
            name="topic"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
