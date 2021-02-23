import "./Jobs.css";
import { makeStyles } from "@material-ui/core/styles";
import PostedListItem from "../JobList/PostedListItem";
import AppliedListItem from "../JobList/AppliedListItem";

export default function All(props) {
  const user = props.state.currentUser;
  const users = Object.values(props.state.users);
  const jobs = Object.values(props.state.jobs);
  const categories = Object.values(props.state.categories);

  const applied = jobs.filter((job) => job.helper_id === user);
  const posted = jobs.filter(
    (job) => job.client_id === user && job.status !== "COMPLETED"
  );
  const completed = jobs.filter(
    (job) => job.client_id === user && job.status === "COMPLETED"
  );

  return (
    <>
      <h3>Posted Jobs</h3>
      {posted.length > 0 &&
        posted.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            categories={categories}
            users={users}
            setJobView={props.setJobView}
            cookies={props.cookies}
            state={props.state}
            setProfile={props.setProfile}
            user={user}
            setCoord={props.setCoord}
          />
        ))}
      {posted.length < 1 && <p className="text-center">You have no posted jobs.</p>}
      <h3>Applied Jobs</h3>
      {applied.length > 0 &&
        applied.map((myApps) => (
          <AppliedListItem
            {...myApps}
            key={myApps.id}
            categories={categories}
            users={users}
            setJobView={props.setJobView}
            cookies={props.cookies}
            state={props.state}
            setCoord={props.setCoord}
            setProfile={props.setProfile}
          />
        ))}
      {applied.length < 1 && <p className="text-center">You have no applied jobs.</p>}
      <h3>Completed Jobs</h3>
      {completed.length > 0 &&
        completed.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            categories={categories}
            users={users}
            state={props.state}
            user={user}
            setProfile={props.setProfile}
          />
        ))}
      {completed.length < 1 && <p className="text-center">You have no completed jobs.</p>}
    </>
  );
}
