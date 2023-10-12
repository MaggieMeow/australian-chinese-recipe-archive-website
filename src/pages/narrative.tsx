import { useStore } from "../store";

export function NarrativePage() {
  const setInterestedPage = useStore((state) => state.setInterestedPage);
  return (
    <div>
      <p>
        <a
          onClick={() => {
            setInterestedPage(1);
          }}
          className="text-3xl font-bold underline"
        >
          Lorem
        </a>
        ipsum dolor, sit amet consectetur adipisicing elit. Repellat nostrum
        illo eveniet unde? Velit in fugit sapiente temporibus eum ut! Doloribus,
        impedit facilis aliquid id et obcaecati cumque temporibus tenetur.
      </p>
      <p>
        <a
          onClick={() => {
            setInterestedPage(3);
          }}
        >
          Lorem
        </a>{" "}
        ipsum dolor, sit amet consectetur adipisicing elit. Repellat nostrum
        illo eveniet unde? Velit in fugit sapiente temporibus eum ut! Doloribus,
        impedit facilis aliquid id et obcaecati cumque temporibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
    </div>
  );
}
