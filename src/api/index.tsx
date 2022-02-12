enum Cmds {
  goods = "goods",
  dealers = "dealers",
}

const request = async (cmd: string | Cmds) => {
  const response = await fetch(
    `https://murmuring-tor-81614.herokuapp.com/api/${cmd}`
  );

  return await response.json();
};

export const getProducts = async () => request(Cmds.goods);

export const getDealers = async () => request(Cmds.dealers);

export const getProductByDealer = async (IDs: string[]) =>
  request(`${Cmds.goods}?${Cmds.dealers}=${IDs.toString()}`);
