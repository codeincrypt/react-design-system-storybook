import { message, notification } from 'antd';

const Toast = {
  success: (content, options) => message.success(content, options?.duration),
  error: (content, options) => message.error(content, options?.duration),
  warning: (content, options) => message.warning(content, options?.duration),
  info: (content, options) => message.info(content, options?.duration),
  loading: (content, options) => message.loading(content, options?.duration),
  notify: (config) => notification.open(config),
  destroy: () => {
    message.destroy();
    notification.destroy();
  },
};

export default Toast;
