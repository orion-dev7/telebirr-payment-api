declare const pmlib: {
  rs: {
    KJUR: {
      crypto: {
        Signature: new (options: { alg: string }) => {
          init: (key: string) => void;
          updateString: (text: string) => void;
          sign: () => string;
        };
      };
    };
    hextob64: (hex: string) => string;
  };
};

export = pmlib;
