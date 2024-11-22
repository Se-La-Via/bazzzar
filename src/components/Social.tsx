// @ts-nocheck

"use client";

import GitHubButton from "react-github-btn";
import {
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

export const SocialMedias = () => {
  const url = 'https://marketplace.mintbase.xyz';
  const title = "Mintbase Templates - Marketplace";

  return (
    <div className="fixed pt-5 top-[60px] left-0  w-full h-[30px] z-50">
      <div className="flex gap-2 justify-end flex-wrap pr-4">
        <GitHubButton
          href="https://github.com/mintbase/templates"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star mintbase/templates on GitHub"
        >
          Star
        </GitHubButton>{" "}
        <div className="social-networks">
          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={24} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};
