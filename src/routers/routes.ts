import Category from "../pages/Clients/Category/Category";
import { ClientHome } from "../pages/Clients/ClientHome/ClientHome";
import Error from "../pages/Error/Error";
import ClientLogin from "../pages/Clients/ClientLogin/ClientLogin";
import { Profile } from "../pages/Profile/Profile";
import PricingSection from "../components/PricingSection/PricingSection";
import CategoryDetail from "../pages/Clients/CategoryDetail/CategoryDetail";
import AdminLogin from '../pages/Admins/AdminLogin/AdminLogin';
import MultipleChoiceQuestions from "../pages/Clients/MultipleChoiceQuestions/MultipleChoiceQuestions";
import MultipleChoiceFunction from "../pages/Clients/MultipleChoiceFunction/MultipleChoiceFunction";
import Challenge from "../pages/Clients/Challenge/Challenge";
import ChallengeDetail from "../pages/Clients/ChallengeDetail/ChallengeDetail";

export const ROUTES_CLIENT = [
  { path: '/', key: 'HOME', exact: true, component: ClientHome },
  {
    path: '/login',
    key: 'LOGIN_CLIENT',
    component: ClientLogin,
  },
  {
    path: '/admin-login',
    key: 'LOGIN_ADMIN',
    component: AdminLogin,
  },
  {
    path: '/profile',
    key: 'PROFILE',
    component: Profile,
  },
  {
    path: '/category',
    key: 'CATEGORY',
    component: Category,
  },
  {
    path: "/category-detail",
    key: "CATEGORY_DETAIL",
    component: CategoryDetail,
  },
  {
    path: "/multiple-choice-question/:id",
    key: "MULTIPLE_CHOICE_QUESTION",
    component: MultipleChoiceQuestions,
  },
  {
    path: "/multiple-choice-function/:id",
    key: "MULTIPLE_CHOICE_FUNCTION",
    component: MultipleChoiceFunction,
  },
  {
    path: "/pricing",
    key: "PRICING",
    component: PricingSection,
  },
  {
    path: "/challenge",
    key: "CHALLENGE",
    component: Challenge,
  },
  {
    path: "/challenge-detail",
    key: "CHALLENGE",
    component: ChallengeDetail,
  },

  //===============PAGE NOT FOUND================================
  {
    path: '**',
    key: 'ERROR',
    component: Error,
  },
];
