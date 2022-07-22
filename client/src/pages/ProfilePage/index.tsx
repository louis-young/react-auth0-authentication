import { PageLayout } from "../../components/PageLayout";
import { Spacer } from "../../components/Spacer";
import { useAuthenticationProvider } from "../../hooks/authentication/useAuthenticationProvider";

export const ProfilePage = () => {
  const { user } = useAuthenticationProvider();

  const { picture, email } = user ?? {};

  return (
    <PageLayout title="Profile">
      <figure>
        <img src={picture} alt={email} className="rounded-full w-24" />

        <Spacer size="large" />

        <figcaption className="font-medium text-gray-900">{email}</figcaption>
      </figure>
    </PageLayout>
  );
};
