import {
  Box,
  CircularProgress,
  FormHelperText,
  Grid,
  TextField,
} from "@material-ui/core";
import { useTheme } from "./style";
import PropTypes from "prop-types";
import Layout from "../../../layouts/Layout";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import InputTitle from "../../../components/InputTitle";
import { Add } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
const DISABLED = 0;
const CreateRequestUI = (props) => {
  const {
    handleCreateRequest,
    name,
    nameValue,
    handleChange,
    nameError,
    content,
    contentValue,
    contentError,
    category,
    categoryError,
    assignee,
    assigneeError,
    dueDate,
    dueDateValue,
    dueDateError,
    listAssignee,
    listCategory,
    onChangeAutocomplete,
    onChangeInputSelect,
    input,
    isLoading,
    nameTouched,
    contentTouched,
    categoryTouched,
    assigneeTouched,
    dueDateTouched,
  } = props;
  const classes = useTheme();
  return (
    <Layout>
      <Box p={10} className={classes.root}>
        <Box
          p={5}
          className={classes.container}
          height="100%"
          display="flex"
          flexDirection="column"
          gridGap="40px"
          justifyContent="space-between"
        >
          <Grid container direction="row" justify="space-between">
            <Title title="Create request" variant="h6" />
            <Button
              className={classes.btn}
              title={
                isLoading ? (
                  <CircularProgress color="inherit" size="27px" />
                ) : (
                  "Create"
                )
              }
              onClick={handleCreateRequest}
              startIcon={<Add />}
            />
          </Grid>
          {/* NAME */}
          <Box className={classes.inputArea}>
            <TextField
              className={classes.input}
              id="title"
              variant="outlined"
              placeholder="Title..."
              fullWidth
              autoFocus={true}
              name={name}
              value={nameValue}
              onChange={handleChange}
            />
            <FormHelperText className={classes.error}>
              {nameTouched && nameError}
            </FormHelperText>
          </Box>
          <Box p={5} className={classes.containerInfo} height="75%">
            {/* CONTENT */}
            <Box className={classes.inputArea}>
              <TextField
                id="description"
                multiline={true}
                rows={8}
                variant="outlined"
                placeholder="Add a description..."
                fullWidth
                name={content}
                value={contentValue}
                onChange={handleChange}
              />
              <FormHelperText className={classes.error}>
                {contentTouched && contentError}
              </FormHelperText>
            </Box>
            <Box className={classes.box__info}>
              <Grid container justify="space-between" alignItems="flex-start">
                <Grid item lg={6} xs={12} sm={12}>
                  {/* CATEGORY */}
                  <Box className={classes.info}>
                    <Box
                      display="flex"
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      className={classes.box}
                    >
                      <Title
                        title="Category"
                        variant="h6"
                        className={classes.title}
                      />
                      <Box className={classes.boxSelect}>
                        <Autocomplete
                          className={classes.input}
                          name={category}
                          onChange={(event, selected) =>
                            onChangeAutocomplete(selected, category)
                          }
                          inputValue={input.category_id}
                          onInputChange={(event, inputChange) =>
                            onChangeInputSelect(inputChange, "category_id")
                          }
                          getOptionLabel={(item) => item.name}
                          getOptionDisabled={(item) => item.status === DISABLED}
                          id={category}
                          options={listCategory}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                        />
                        <FormHelperText className={classes.error}>
                          {categoryTouched && categoryError}
                        </FormHelperText>
                      </Box>
                    </Box>
                  </Box>
                  {/* DUE_DATE */}
                  <Box className={classes.info}>
                    <InputTitle
                      type={true}
                      title="Due Date"
                      typeInput="date"
                      idInput="status"
                      variant="outlined"
                      name={dueDate}
                      valueInput={dueDateValue}
                      handleChangeInput={handleChange}
                      error={dueDateTouched && dueDateError}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12} sm={12}>
                  {/* ASSIGNEE */}
                  <Box className={classes.info}>
                    <Box
                      display="flex"
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      className={classes.box}
                    >
                      <Title
                        title="Assign"
                        variant="h6"
                        className={classes.title}
                      />
                      <Box className={classes.boxSelect}>
                        <Autocomplete
                          className={classes.input}
                          name={assignee}
                          onChange={(event, selected) =>
                            onChangeAutocomplete(selected, assignee)
                          }
                          inputValue={input.assignee}
                          onInputChange={(event, inputChange) =>
                            onChangeInputSelect(inputChange, "assignee")
                          }
                          getOptionLabel={(item) => item.name}
                          id={assignee}
                          options={listAssignee}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                        />
                        <FormHelperText className={classes.error}>
                          {assigneeTouched && assigneeError}
                        </FormHelperText>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

CreateRequestUI.defaultProps = { listAssignee: [], listCategory: [] };
CreateRequestUI.propTypes = {
  handleCreateRequest: PropTypes.func,
  name: PropTypes.string,
  nameValue: PropTypes.string,
  handleChange: PropTypes.func,
  nameError: PropTypes.string,
  content: PropTypes.string,
  contentValue: PropTypes.string,
  contentError: PropTypes.string,
  category: PropTypes.string,
  categoryValue: PropTypes.node,
  categoryError: PropTypes.string,
  assignee: PropTypes.string,
  assigneeValue: PropTypes.node,
  assigneeError: PropTypes.string,
  dueDate: PropTypes.string,
  dueDateValue: PropTypes.string,
  dueDateError: PropTypes.string,
  listAssignee: PropTypes.array,
  listCategory: PropTypes.array,
  input: PropTypes.object,
  nameTouched: PropTypes.bool,
  contentTouched: PropTypes.bool,
  categoryTouched: PropTypes.bool,
  assigneeTouched: PropTypes.bool,
  dueDateTouched: PropTypes.bool,
};

export default CreateRequestUI;
