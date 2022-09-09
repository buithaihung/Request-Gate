import { useFormik } from "formik";
import { useEffect, useState } from "react";
import CreateRequestUI from "./CreateRequestUI";
import * as Yup from "yup";
// import { connect } from "react-redux";
// import { getListCategory } from "../../../redux/actions/category";
// import { getListAssignee } from "../../../redux/actions/user";
// import { createRequest } from "../../../redux/actions/request";
import PropTypes from "prop-types";
import Message from "../../../components/Message";
import * as infoRequest from "../../../constants/request";
import { TITLE_ADD_REQUEST } from "../../../constants/listTitle";
const Create = (props) => {
  const {
    assignee,
    category,
    // fetchCategory,
    // fetchAssignee,
    createRequestDispatch,
  } = props;
  const [inputAuto, setInputAuto] = useState({ category_id: "", assignee: "" });
  const [listAssignee, setListAssignee] = useState();
  const [listCategory, setListCategory] = useState();
  const [infoMessage, setInfoMessage] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   document.title = TITLE_ADD_REQUEST;
  //   fetchCategory();
  //   fetchAssignee();
  // }, [fetchCategory, fetchAssignee]);
  useEffect(() => {
    setListAssignee(assignee);
    setListCategory(category);
  }, [assignee, category]);
  const onSuccessFunc = (nameRequest) => {
    setInfoMessage({
      message: nameRequest,
      isOpen: true,
      status: "success",
    });
    setIsLoading(false);
  };
  const onErrorFunc = () => {
    setInfoMessage({
      message: `Thêm mới request thất bại!`,
      isOpen: true,
      status: "error",
    });
    setIsLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      level: "1",
      status_request: "1",
      name: "",
      content: "",
      assignee: "",
      due_date: "",
      category_id: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      createRequestDispatch({
        params: values,
        onSuccess: (message) => onSuccessFunc(message),
        onError: () => onErrorFunc(),
      });
      formik.resetForm();
      setInputAuto({ category_id: "", assignee: "" });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name request cannot be blank!")
        .max(
          infoRequest.MAX_OF_NAME,
          `Name must not exceed ${infoRequest.MAX_OF_NAME} characters!`
        )
        .min(
          infoRequest.MIN_OF_NAME,
          `Name must be more than ${infoRequest.MIN_OF_NAME} characters!`
        ),
      content: Yup.string()
        .required("Content request cannot be blank!")
        .max(
          infoRequest.MAX_OF_CONTENT,
          `Content must not exceed ${infoRequest.MAX_OF_CONTENT} characters!`
        )
        .min(
          infoRequest.MIN_OF_CONTENT,
          `Content must be more than ${infoRequest.MIN_OF_CONTENT} characters!`
        ),
      assignee: Yup.string().required("Please add assignee for request!"),
      due_date: Yup.date()
        .required("Please add due date for request!")
        .min(infoRequest.YESTERDAY, "Date cannot be in the past!"),
      category_id: Yup.string().required(
        "Category for reuqest cannot be blank!"
      ),
    }),
  });
  const onChangeAutocomplete = (selected, key) => {
    selected !== null
      ? formik.setFieldValue(key, selected.id)
      : formik.setFieldValue(key, "");
  };
  const onChangeInputSelect = (newValueInput, key) => {
    setInputAuto({ ...inputAuto, [key]: newValueInput });
  };
  const getCategoryById = (category, id) => {
    return category.find((categoryItem) => categoryItem.id === id);
  };
  const checkAssigneeById = (users, id) => {
    return users.some((userItem) => userItem.user_id === id);
  };
  const handleClose = () => {
    setInfoMessage({ ...infoMessage, isOpen: false });
  };
  /**
   * CHOOSE CATEGORY BEFORE
   */
  useEffect(() => {
    formik.values.category_id === ""
      ? setListAssignee(assignee)
      : setListAssignee(
          assignee.filter((item) =>
            checkAssigneeById(
              getCategoryById(category, formik.values.category_id).users,
              item.id
            )
          )
        );
  }, [formik.values.category_id, category, assignee]);
  /**
   * CHOOSE ASSIGNEE BEFORE
   */
  useEffect(() => {
    formik.values.assignee === ""
      ? setListCategory(category)
      : setListCategory(
          category.filter((item) =>
            checkAssigneeById(item.users, formik.values.assignee)
          )
        );
  }, [formik.values.assignee, category]);

  return (
    <>
      <CreateRequestUI
        handleCreateRequest={formik.handleSubmit}
        handleChange={formik.handleChange}
        name="name"
        nameValue={formik.values.name}
        nameError={formik.errors.name}
        content="content"
        contentValue={formik.values.content}
        contentError={formik.errors.content}
        category="category_id"
        categoryValue={formik.values.category_id}
        categoryError={formik.errors.category_id}
        assignee="assignee"
        assigneeValue={formik.values.assignee}
        assigneeError={formik.errors.assignee}
        dueDate="due_date"
        dueDateValue={formik.values.due_date}
        dueDateError={formik.errors.due_date}
        listAssignee={listAssignee}
        listCategory={listCategory}
        onChangeAutocomplete={onChangeAutocomplete}
        onChangeInputSelect={onChangeInputSelect}
        input={inputAuto}
        isLoading={isLoading}
        nameTouched={formik.touched.name}
        contentTouched={formik.touched.content}
        categoryTouched={formik.touched.category_id}
        assigneeTouched={formik.touched.assignee}
        dueDateTouched={formik.touched.due_date}
      />
      <Message
        open={infoMessage.isOpen}
        handleClose={handleClose}
        title={infoMessage.message}
        status={infoMessage.status}
      />
    </>
  );
};
Create.defaultProps = {
  assignee: [],
  category: [],
};
Create.propTypes = {
  assignee: PropTypes.array,
  category: PropTypes.array,
  fetchCategory: PropTypes.func,
  fetchAssignee: PropTypes.func,
  createRequestDispatch: PropTypes.func,
};
const mapStateToProps = (store) => {
  return {
    assignee: store.user.listAssignee,
    category: store.category.listCategory,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCategory: () => {
//       dispatch(getListCategory());
//     },
//     fetchAssignee: () => {
//       dispatch(getListAssignee());
//     },
//     createRequestDispatch: (params) => {
//       dispatch(createRequest(params));
//     },
//   };
// };

export default Create;
