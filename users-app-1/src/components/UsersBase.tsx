import { ChangeEvent, Fragment, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import User from "../models/User";
import UsersDisplay from "./UsersDisplay";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

const UsersBase = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const classes = useStyles();

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((response) => {
          setLoading(false);
          setUsers(
            response.data.data.map(
              (user: any) =>
                new User(
                  user.first_name,
                  user.last_name,
                  user.email,
                  user.avatar
                )
            )
          );
        })
        .catch((error) => console.error(error));
    })();
  }, [page]);

  return (
    <Fragment>
      <div className={classes.root}>
        <Pagination onChange={handlePageChange} count={10} size="small" />
      </div>
      <h3>Page: {page}</h3>

      {loading ? (
        <h1>Loading...</h1>
      ) : users.length ? (
        <ul>
          <UsersDisplay users={users} />
        </ul>
      ) : (
        <h1>No Users Found</h1>
      )}
    </Fragment>
  );
};

export default UsersBase;
