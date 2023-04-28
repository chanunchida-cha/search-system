import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FromCreateEdit from "~/components/creat-edit/FromCreateEdit";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";
import { feedStore } from "~/store/main-feed/FeedStore";

type Props = {};

const typeTab = [
  {
    type: "history",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    type: "Assessment",
    i18n: "ข้อมูลผลการประเมิน",
  },
];

const Edit = observer(({}: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [type, settype] = useState("");
  const updateToggle = () => {
    settype("history");
  };

  const fetchFeedDetail = async (id: number) => {
    await feedStore.getFeedDetail(id);
  };

  const fetchAssessmentDetail = async (id: number) => {
    await feedStore.getAssessmentDetail(id);
  };

  useEffect(() => {
    updateToggle();
    fetchFeedDetail(Number(id));
    fetchAssessmentDetail(Number(id));
  }, []);

  return <FromCreateEdit/>
});

export default Edit;
