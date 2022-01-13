import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Card, Image, Tooltip, Modal, Input, Alert, Spin, Button } from "antd";
import { useNFTBalance } from "hooks/useNFTBalance";
import { FileSearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getExplorer } from "helpers/networks";
import { useWeb3ExecuteFunction } from "react-moralis";
const { Meta } = Card;

const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    gap: "10px",
  },
};

function NFTBalance() {

  return (
    <>
      <div style={styles.NFTs}>
          <h1>Das war ein Befehl! Der Angriff Steiners war ein Befehl!

Wer sind Sie, dass Sie es wagen, sich meinem Befehl zu widersetzen? So weit ist es also gekommen? Das Militär hat mich belogen! Jeder hat mich belogen, sogar die SS!

Die gesamte Generalität ist nichts als ein Haufen niederträchtiger, treuloser Feiglinge!

Nichts als FEIGLINGE, VERRÄTER, VERSAGER!!!

Die Generalität ist ein GeschMEIß des deutschen Volkes! Sie ist ohne Ehre!

Sie nennen sich Generale, weil sie JAHRE an der Militärakademie zugebracht haben, nur um zu lernen, wie man Messer und Gabel hält. Jahrelang hat das Militär meine Aktionen nur verhindert. Es hat mir jeden nur erdenklichen Widerstand in den Weg gelegt.

Ich hätte gut daran getan... vor Jahren alle höheren Offiziere liquidieren zu lassen, wie STALIN!

Ich war nie auf einer Akademie. Und doch habe ich allein, allein auf mich gestellt, ganz Europa erobert!

Verräter...

VON ALLEM ANFANG AN BIN ICH SO VERRATEN UND BETROGEN WORDEN!

Es war ein ungeheuerer Verrat geübt am deutschen Volke!

Aber alle diese Verräter werden bezahlen. MIT IHREM EIGENEN BLUT WERDEN SIE BEZAHLEN! SIE WERDEN ERSAUFEN IN IHREM EIGENEN BLUT!

...

Meine Befehle sind in den Wind gesprochen. Es ist unmöglich, unter diesen Umständen zu führen.

Es ist aus.

Der Krieg…ist verloren.

Aber wenn Sie, meine Herren, glauben, dass ich deshalb Berlin verlasse, irren Sie sich gewaltig! Eher jage ich mir eine Kugel durch den Kopf. Tun Sie, was Sie wollen...</h1>
        </div>
    </>
  );
}

export default NFTBalance;
