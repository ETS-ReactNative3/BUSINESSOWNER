import { put, call, select } from "redux-saga/effects";
import saveJobs from "app/api/methods/saveJobs";
import * as saveJobAction from "app/actions/saveJobAction";
import * as loaderAction from "app/actions/loaderActions";
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* saveJobsAsync(action) {
  const { userToken } = yield select((state) => state.getTokenReducer);
  // let userToken = "5t58B2ID0Zy8xjkNwUqKoPLRCLQqLuU7HdBuGzF1mv6ep3q7YWfw6WDBXgLtZ7IErB9F0n-HODMM0qOQtD0lyQGdHuKnpLrHCDzAeZPMN2ZsZ9LNeKdRaiy1CX8CqGVyXe76ZaDYgvhVCxG-WNDMCjP0Nr8MXTID6DHG0OTFp-Z6DllGEMGFhzBYEXgs58XHp5hWthbIHTme2p6mxfGMu3t_GoGrk1jB7juJLa8bgxE";
  yield put(loaderAction.enableLoader());

  try {
    const response = yield call(saveJobs, action.params, userToken);
    console.log("POST JOB RESPONSE", response);

    yield put(loaderAction.disableLoader({}));
    if (response.Status === "Success") {
      yield put(saveJobAction.saveJobResponse(response.Data, true));
      if (action.callback) action.callback(true);
      // yield call(navigateActions.navigateToJobList());
    } else if (response.Status === "Failure") {
      yield put(saveJobAction.saveJobFailed(false));
      yield put(loaderAction.disableLoader({}));
      if (action.callback) action.callback(false);
    }
  } catch (error) {
    yield put(saveJobAction.saveJobFailed(false));
    yield put(loaderAction.disableLoader({}));
    console.log("error in post job", error);
  }
}
