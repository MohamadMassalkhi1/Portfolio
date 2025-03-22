import { Octokit } from '@octokit/rest';

const octokit = new Octokit();
const GITHUB_USERNAME = 'MohamadMassalkhi1';
const REPO_NAME = 'AI-and-ML-Projects';

export const getProjects = async () => {
  try {
    const { data: repoData } = await octokit.repos.get({
      owner: GITHUB_USERNAME,
      repo: REPO_NAME,
    });

    const { data: contents } = await octokit.repos.getContent({
      owner: GITHUB_USERNAME,
      repo: REPO_NAME,
      path: '',
    });

    return Array.isArray(contents)
      ? contents.filter((item) => item.type === 'dir')
      : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}; 