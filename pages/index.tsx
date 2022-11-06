import styles from "../styles/Home.module.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../src/store/counter/actions";

export default function Home() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: increment.type });
  const handleDecrement = () => dispatch({ type: decrement.type });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Typography variant="h5">{count}</Typography>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </main>
    </div>
  );
}
